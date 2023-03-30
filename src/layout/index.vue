<template>
  <div>
    <el-container>
<!-- 顶部栏 -->
  <el-header>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#6480e3"
    text-color="#fff"
    active-text-color="#ffd04b">
  <el-menu-item index="1">欢迎您，admin</el-menu-item>
  <el-menu-item index="3">
    <el-button style="background-color: #6480e3; color: #fff; border: none;">退出</el-button>
  </el-menu-item>
  </el-menu>

</el-header>
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
<!-- 侧边菜单栏 -->
  <el-col >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="2">
        <i class="el-icon-house"></i>
        <span slot="title">帝可得</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>工单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">运营工单</el-menu-item>
          <el-menu-item index="1-2">运维工单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-map-location"></i>
          <span>点位管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">区域管理</el-menu-item>
          <el-menu-item index="1-2">点位管理</el-menu-item>
          <el-menu-item index="1-3">合作商管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-data-board"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">设备管理</el-menu-item>
          <el-menu-item index="1-2">设备状态</el-menu-item>
          <el-menu-item index="1-2">设备类型管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">人员列表</el-menu-item>
          <el-menu-item index="1-2">人效统计</el-menu-item>
          <el-menu-item index="1-2">工作量列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">商品类型</el-menu-item>
          <el-menu-item index="1-2">商品管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-s-opportunity"></i>
        <span slot="title">策略管理</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-finance"></i>
        <span slot="title">对账统计</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row>
</el-aside>

<!-- 主面板 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-menu-demo{
    /* margin-right: 10px; */
    background-color: aqua;
  }
</style>