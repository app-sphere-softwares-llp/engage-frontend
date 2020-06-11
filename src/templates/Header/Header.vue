<!-- CSS content -->
<style lang="scss">
    @import "Header.scss";
</style>

<!-- HTML content -->
<template>

    <div>

        <div class="nav-wrap">

            <ul class="nav-right">
                <li>

                    <a-dropdown>
                        <a class="ant-dropdown-link" :placement="'bottomLeft'" @click="e => e.preventDefault()">
                            <a-avatar style="backgroundColor:#87d068" icon="user" />
                        </a>
                        <a-menu slot="overlay">
                            <a-menu-item key="0">
                                <a rel="noopener noreferrer" href="" @click="signout"><a-icon type="poweroff" /> Sign out</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>

                </li>

            </ul>
        </div>
    </div>

</template>

<!-- JS content -->
<script>
    export default {
        name: "Header",
        methods : {
            signout () {
                this.$router.replace({ name: "login" });
            }
        }
    };
</script>
