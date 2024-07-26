<template>
    <v-navigation-drawer v-model="drawer" permanent color="#F4F5F9" app>
<!--permanent 不管屏幕尺寸如何，抽屉都可以看到 app确保侧边栏在滚动的时候保持在上方-->
        <v-list-item class="px-2 py-5">
            <v-list-item-title class="text-capitalize" align="center">
<!--          x-large      使组件尺寸变的无比巨大-->
                <v-icon x-large>fab fa-bitcoin</v-icon> Coinbets
            </v-list-item-title>
        </v-list-item>
        <v-list nav dense>
<!--        dense 减小列表块的最大宽度 nav 另一种样式可以减小 v-list-item 的宽度并圆角化。 通常与 v-navigation-drawer 一起使用-->
            <v-list-item-group v-model="selectedItem" color="deep-purple">
                <v-list-item v-for="(item,i) in items" :key="i">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{item.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-card align="center" class="pa-3">
                    <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10" class="mb-8">
<!--    dot缩小徽章的尺寸并隐藏其内容 bordered 当使用 dot 属性时，默认情况下会在徽章上应用一个 2px 和它的周围应用一个 1.5px 的边框。 -->
                        <v-avatar size="40">
                            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                        </v-avatar>
                    </v-badge>
                    <h4 class="grey--text">Total balance</h4>
                    <h2>$852.50</h2>
                    <h5 class="green--text">+$584.50 today</h5>
                    <v-card class="mt-5" color="deep-purple" dark>
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title>Your Wallet Address</v-list-item-title>
                                <v-list-item-subtitle>3QjwF2YkhdygZ47Akjh</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-card>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return{
                selectedItem:0,
                drawer:null,
                items:[
                    {icon:'fas fa-home', text:'Dashboard', route:'/home'},
                    {icon:'fas fa-money-check-alt', text:'Buy / Sell', route:'/hobuysme'},
                    {icon:'fas fa-dolly', text:'Transaction', route:'/transactions'},
                    {icon:'fas fa-exchange-alt', text:'Exchange', route:'/exchanges'},
                    {icon:'fas fa-cog', text:'Tools', route:'/tools'}
                ]
            }
        }
    }
</script>

<style scoped>
div >>> .v-list a {
    text-decoration: none;
}
</style>