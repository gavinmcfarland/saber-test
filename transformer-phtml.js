const path = require('path')
const phtml = require('phtml')
const extractSFCBlocks = require('extract-sfc-blocks')

const ID = 'transformer-phtml'

exports.name = ID

exports.apply = api => {
    api.transformers.add('phtml', {
        extensions: ['phtml'],
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
            const html = phtml.process(body, {
                filename: basename,
                basedir: dirname
            })
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
            .rule('phtml')
            .test(/\.pug$/)
            .use('phtml-loader')
            .loader(require.resolve('phtml-loader'))
    })
}