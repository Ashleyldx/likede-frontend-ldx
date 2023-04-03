<template>
  <div class="navbar">
    <router-link key="collapse" class="sidebar-logo-link" to="/">
      <img width="88px" style="position: relative; top: 4px;" src="http://likede2-admin.itheima.net/img/logo.3673fab5.png" class="logo">
    </router-link>

    <div class="right-menu">
      <el-row>
        <el-col :span="5">
          <div style="height: 60px; line-height: 60px;">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAGlElEQVRYhaWYe3BUVx3HP/ex2YRs7u7mQQiExyYk1A5NaGmsbZ1SaUeo03FaOmr/cug4PmbEWq1lBmbsOFYxpY6gzuhUsYBjsQ/EYIFKlQhNocQCTcgieUpeZBIKIcl2k33ce49/3H0nu7nY71/3nPO7v/O55577O7/flQJBk1uQAqwDHgLuBmoBL+AGJoGbQDdwDmgGTgKGXeeSTZiFwPeAzcAiu86BUWAfsAu49klh8oCtwDZgwS1AZGoaaAReBCL/D0wt8Dqw5hNAZKoNeBLouhWYdUAT4MkcuDrYz6njR+jsaOP62CjRSARJkijyePB4S3B7i9H1KJ0X2whMTfK1Z7by8KObUl1MAI8Bp+zArAfeIuO16NEoe3Y38s7hgwghsj35LKkOB7994yilC9O22gzwKNYmT0jOuHcVcCgTBGD3j7dzvOnNWwIB6yHaPzib2V0Qm2dVNhgn8BrWZ5qmi+daOd183DaAKQThqEE4qgMQDEzNZebG2pPOeIeaMvgDsmzWln+8ndYWAgzTTKySKUAIgWGa6KaJaSZXz6EoIEnZuOuB54CfpMKUA9vnsm7/4Cz/PHIo0Q5FdUKRKHbfVsQwqKhclstkO/B7YCwO812yxBH/hX8nHUcNwhGddffV89ADd7JyxWIM08R/uZ+mt8/Q2TM424GA82fepeH+ddlgCoBngG0q1uo8lc1y8uZ44tpbrPHrbZu5beXSNJuq5RV8ceO9vNfq59W/NNPu7wNAliTyHArDA1eyuY/rKeCHKvAAuUJ87H1rRYX8aufTlJVY+zsa1ZFlGUVJfgN31dXw2XtWEwyGGP1onMZfvMrI6A2czvz5YMqBz6lYh15W5RcUAFC3uoo3jrbw4X/+y8fBGa7dmOTAL59jUZk3YfvlLY3kOVSKPUUsyHfiW17ByOgNSsoWzgcD8LAKrM1lUVFeytr6WpZVlnPfZ+6gob6Wa+MBGlZXsbA0PUD/adezXLjUj6qA1+2ira2btaFaVq702YGpV4HbcllsaCjnCw1fZeDqGL6l5bx1opXrQYVSTyHlKatiSWJ/Uwu+pYv40ZbHcSoKTz62HgPFDswqGSsfySoF67hYUlEKwP1rb0eOTlCzYvEsW81VQH1NBXU15QBULi5L8zGPiqVA0MwZMaThkxCZQs1TkLIHrzllmmBEdcjTEJUPzmsvA3PG6riEawmSJFkgQpAW7dKuM+4TAlm2PkbhWmKHfUrGShWzS/MhKY7EfEY4mRsJITDCYYxQGGEms0tT1xFGrK3kgWZrA4/LQGdOE1kFrRLAWh1ZxgiHrbYsozidKPlOJEVJgJi6jqxawV3Slls+5leXCpwHNuQ0U12JSyXPgTBN9FAMKMVMALKioOYng5xw2M5W26VA0FwPnJjPUgn0oQR6QdhL9gUyZlEVhlaTgZxVn5cCQVMFhrFCck71dHbw94MvU7dqGbW+JSxdXAbCjC2JTCAYpu1SDx3dQ4gFFXxzy1Zb4MAYUCkDOrDXzh1/eGUPx0938NIrR9m5v5mPJB+Xx90cbh3lulzFiY4JfvryYf72rwscOXaMwcF+uzB7AT1+yu3Gykuzqu3D8/g72hJtl8uFprkZHR3F39GB2+3B7dYS40II/rhvjx2Qmdj8ibRzDNiR644/H9iX1nZrGqrDwcBAP909XciKQklJWZrN2fdbGOifN33YEZs/LQd+CWify7qnp4tL/otpyXihqxCA/v4rXB0eZmZ6GlesLy4hBH899HoukPbYvGTChIGvYNXMaTp2pCnhPC5XofW5Dw8NIYSgt7cHrahoFsy7p5oJBj+eC2QyNl94LhiwKr1NQCjeoes6p987NQvG6/VgGAZDQ1aq2dfXi6Zpac6EEEQiYd4/05IJEorNk1ZZZsKAVVhtxKr86LzsZ3o6GHefMHJrGiMjV9F1qxzp7u5CURRcrmSAjMOfP9ea6n8i5j+tgMsGA1bpeS9wcWhwINGZWoJomsbgQHKsr7c3AZmUZZ/ioz3md1ZpmwsGrDPr0yt81c9LkjxjmmZaCuH1eFlz511UVVcDsOmJLyUgM+GrqmtmgOeBe8hxFuaCAQh/6vbVL2x5+lmfEKJRkqTEPxZNK6KwsJAdP9vJ17/xLTZsfAQAjyeZigphXrujbs2L3/7O933AC6Rs1rlk92cRB988wP69v1OEEA8C6zc/vuHuwMTN2tDMdLFpGJqiqlP5BQvG/VdGujuvDJ0Dmqura0/+fNdvDIfDYWuO/wFnBHcP9ekrdQAAAABJRU5ErkJggg==" style="vertical-align: middle;">
          </div>
        </el-col>
        <el-col :span="14">
          <div style="height: 60px; line-height: 60px;">
            <span style="vertical-align: middle;">
              欢迎您，{{ username }}
            </span>
          </div>
        </el-col>
        <el-col :span="5">
          <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
            <div style="height: 60px; line-height: 60px;" @click="logout">
              <span style="vertical-align: middle; cursor: pointer;">退出</span>
              <svg version="1.1" viewBox="0 0 1024 1024" class="svg-icon svg-fill" style="width: 16px; height: 16px; vertical-align: middle; cursor: pointer; color: rgb(255, 255, 255);"><defs /><path pid="0" d="M814.592 348.211L552.858 694.835a51.2 51.2 0 0 1-81.716 0L209.408 348.262a25.6 25.6 0 0 1 20.429-41.062h564.275a25.6 25.6 0 0 1 20.48 41.011z" _fill="#5A5A68" /></svg>
            </div>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapGetters(['username', 'sidebar'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1999;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
  background-size: cover;
  background-repeat: no-repeat;
  .svg-fill {
    fill: currentColor;
    stroke: none;
}
  .logo {
    margin-top: 6px;
    margin-left: 15px;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0,0,0,0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    width: 240px;
    height: 100%;
    margin-right: 24px;
    color: rgb(255,255,255);
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
