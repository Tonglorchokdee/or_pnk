import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import _ from 'lodash'

const rulesPlugin: Plugin = (context, inject) => {
  const i18n = context.app.i18n

  const $rules = {
    required: (v: any) => !!v || v === 0 || i18n.t('rules.required'),
    selected: (v: any) => v.length !== 0 || i18n.t('rules.selected'),
    number: (v: any) => /^\d+$/.test(v) || i18n.t('rules.number'),
    numeric: (v: any) => !isNaN(v) || i18n.t('rules.numeric'),
    positive: (v: any) => v > 0 || i18n.t('rules.positive'),
    equal: (check: any) => (v: any) => !v || v === check || i18n.t('rules.equal'),
    length: (size: any, show?: any) => (v: any) => !v || v.length === size || `${i18n.t('rules.length')} ${show || size} ${i18n.t('rules.length-unit')}`,
    email: (v: any) =>
      !v ||
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      i18n.t('rules.email'),
    validateUrlRule (v: any) {
      const pattern = new RegExp(
        '^(https?:\\/\\/)' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
        'i'
      )
      return pattern.test(v) ? true : i18n.t('rules.url')
    },
    max_file_size: (mb?: number) => (file: File | File[]) => {
      const maxSize = ((mb || 0) * 1048576) || 5242880
      let size = 0
      if (file && Array.isArray(file)) {
        size = file.length ? _.sumBy(file, 'size') : 0
      } else if (file) {
        size = file.size
      }
      return !file || size < maxSize || `${i18n.t('rules.max_file_size')} ${mb || 5} ${i18n.t('units.mb')}!`
    }
  }

  Vue.prototype.$rules = $rules
  inject('rules', $rules)
}

export default rulesPlugin