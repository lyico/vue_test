/*
 * @Description  : router的实现
 * @Author       : chenLiang
 * @Date         : 2022-10-20 12:09:54
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-10-20 19:50:46
 */

let _Vue = null;

export default class VueRouter {
  static install(Vue) {
    // 1.判断当前插件是否已经被安装
    if (VueRouter.install.installed) {
      return;
    }
    VueRouter.install.installed = true;

    // 2.把Vue构造函数记录到全局变量
    _Vue = Vue;

    // 3.把创建Vue实例时候传入的router对象注入到Vue实例上

    //混入
    _Vue.mixins({
      beforeCreate() {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
        }
      },
    });
  }

  constructor(options) {
    this.options = options;
    this.routerMap = {}; //key: 为路由路径   value为组件
    // this.data = _Vue.ob
  }
}
