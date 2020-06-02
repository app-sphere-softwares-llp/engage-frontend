<template>
    <div id="side-nav">
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
            <a-menu-item key="1">
                <router-link to="/dashboard">
                    <a-icon type="user" />
                    <span>Dashboard</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="2">
                <router-link to="/projects">
                    <a-icon type="video-camera" />
                    <span>Projects</span>
                </router-link>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        props: {
            msg: String
        }
    };
</script>
