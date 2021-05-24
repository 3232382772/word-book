import Toast from  './Toast'
const obj = {}
obj.install = function (Vue) {
    // console.log('执行toast函数',Vue);
    // Vue.prototype.$toast = 对象    将$toast 加入到vue原型中
    //1.创建组件构造器
    const toastContrustor = Vue.extend(Toast)   //将toast组件添加到构造器中
    //2.new的方式，根据创建的构造器，创建一个组件对象
    const toast = new toastContrustor()
    //3.将组件对象手动挂载到某个元素中  $mount  挂载
    toast.$mount(document.createElement('div'))
    //4.toast.$el就是对应的div  将 div添加到body中
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}
export default obj
