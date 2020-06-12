<!-- CSS content -->
<style lang="scss">
    @import "Sidebar.scss";
</style>

<!-- HTML content -->
<template>
    <div id="side-nav" class="open-menu">
        <div class="main-menu">

            <!-- logo option -->
            <div class="logo" >
                <img src="../../assets/images/logo/logo-fold.svg">
            </div>

            <a-menu theme="dark" mode="inline" :default-selected-keys="['activities']">

                <a-menu-item key="1" @click="selectedMenu('dashboard', 'Activities')">
                    <router-link to="/activities">
<!--                        <img src="../../assets/images/icons/menu_activities.svg" />-->
                        <a-icon type="user" />
                        <span> Activities</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="2" @click="selectedMenu('reports', 'Reports')">
                    <router-link to="/projects">
                        <i><img src="../../assets/images/icons/menu_reports.svg" /></i>
                        <span> Projects</span>
                    </router-link>
                </a-menu-item>

                <a-menu-item key="3" @click="selectedMenu('projects', 'Projects')">
                    <router-link to="/projects">
                        <i class="anticon anticon-user"><img src="../../assets/images/icons/menu_projects.svg" /></i>
                        <span> Projects</span>
                    </router-link>
                </a-menu-item>

<!--                <a-menu-item v-for="item in menus" :key="item.route" @click="selectedMenu(item.route, item.label)">-->
<!--                    <router-link :to="'/'+item.route">-->
<!--                        <span><img src="../../assets/images/icons/menu_activities.svg"></span>-->
<!--                        <span class="">{{item.label}}</span>-->
<!--                    </router-link>-->
<!--                </a-menu-item>-->

            </a-menu>

            <!-- profile option -->
            <div class="menu-profile" >
                <div class="avatar-icon"><img src="../../assets/images/icons/white_user.svg"></div>
            </div>

        </div>

        <div class="sub-menu">

            <!-- global search -->
            <div class="global-search-wrapper">
                <a-auto-complete
                        class="global-search"
                        size="small"
                        style="width: 100%"
                        placeholder="Search"
                        option-label-prop="title"
                        @select="onSelect"
                        @search="handleSearch"
                >
                    <template slot="dataSource">
                        <a-select-option v-for="item in dataSource" :key="item.category" :title="item.category">
                            Found {{ item.query }} on
                            <a
                                    :href="`https://s.taobao.com/search?q=${item.query}`"
                                    target="_blank"
                                    rel="noopener noreferrer"
                            >
                                {{ item.category }}
                            </a>
                            <span className="global-search-item-count">{{ item.count }} results</span>
                        </a-select-option>
                    </template>
                    <a-input>
                        <span slot="prefix">
                            <img src="../../assets/images/icons/search.svg">
                        </span>
                    </a-input>
                </a-auto-complete>
            </div>
            <!-- end global search -->


            <!-- menu item selected -->
            <h3 class="selected-menu-item-name">{{selectedMenuItemName ? selectedMenuItemName : 'Dashboard' }}</h3>

            <!-- sub menu items -->
            <template v-if="selectedMenuItemRoute==='projects'">
                <a-list item-layout="horizontal" :data-source="recentProjects">
                    <a-list-item slot="renderItem" slot-scope="item, index" :class="index===0 ? 'selected' : ''">
                        <a-list-item-meta :description="item.description" >
                            <a slot="title" href="javascript:void(0);">{{ item.title }}</a>
                            <a-avatar
                                    slot="avatar"
                                    src="../../assets/images/icons/folder.svg" />
                        </a-list-item-meta>
                    </a-list-item>
                </a-list>
            </template>


        </div>


    </div>
</template>

<!-- JS content -->
<script>
    export default {
        name: "Sidebar",
        props: {
        },
        data() {
            return {
                dataSource: [],
                selectedMenuItemName: 'Dashboard',
                selectedMenuItemRoute: 'dashboard',
                menus: [
                    {
                        label:'Activities',
                        route:'activities',
                        icon:'../../assets/images/icons/menu_activities.svg'
                    },
                    {
                        label:'Reports',
                        route:'reports',
                        icon:'../../assets/images/icons/menu_projects.svg'
                    },
                    {
                        label:'Activities',
                        route:'activities',
                        icon:'../../assets/images/icons/menu_projects.svg'
                    }
                ],
                recentProjects : [
                    {
                        title: 'Assign.Work',
                        description: 'Last worked 1 days ago'
                    },
                    {
                        title: 'Engage',
                        description: 'Last worked 2 days ago'
                    },
                    {
                        title: 'Linese',
                        description: 'Last worked 2 days ago'
                    },
                    {
                        title: 'FLUIT',
                        description: 'Last worked 3 days ago'
                    },
                    {
                        title: 'Anandam',
                        description: 'Last worked 3 days ago'
                    }
                ]
            };
        },
        methods: {
            selectedMenu(route, name) {
                this.selectedMenuItemRoute = route;
                this.selectedMenuItemName = name;
            },
            onSelect(value) {
                console.log('onSelect', value);
            },

            handleSearch(value) {
                this.dataSource = value ? this.searchResult(value) : [];
            },

            getRandomInt(max, min = 0) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },

            searchResult(query) {
                return new Array(this.getRandomInt(5))
                    .join('.')
                    .split('.')
                    .map((item, idx) => ({
                        query,
                        category: `${query}${idx}`,
                        count: this.getRandomInt(200, 100),
                    }));
            },
        }
    };
</script>
