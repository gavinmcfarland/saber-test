const path = require('path')
const posthtml = require('posthtml')
const extractSFCBlocks = require('extract-sfc-blocks')

const ID = 'transformer-posthtml'

exports.name = ID

exports.apply = api => {
    api.transformers.add('html', {
        extensions: ['html'],
        parse(page) {
            const {
                body,
                frontmatter
            } = api.transformers.parseFrontmatter(
                page.content
            )
            const {
                base: basename,
                dir: dirname
            } = path.parse(
                page.internal.absolute || ''
            )
            const html = posthtml().process(body, {
                filename: basename,
                basedir: dirname,
                sync: true
            }.html)
            const {
                html: pageContent,
                blocks
            } = extractSFCBlocks(html)
            Object.assign(page, frontmatter)
            page.content = pageContent
            page.internal.hoistedTags = blocks
        },
        getPageComponent(page) {
            return `<template>
        <layout-manager>
          ${page.content || ''}
        </layout-manager>
      </template>
      `
        }
    })

    api.hooks.chainWebpack.tap(ID, config => {
        config.module
            .rule('html')
            .test(/\.html$/)
            .use('posthtml')
            .loader(require.resolve('posthtml-loader'))
    })
}