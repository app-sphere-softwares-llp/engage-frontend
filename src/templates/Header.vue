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

<style>

    .nav-wrap {
        flex: 1;
        display: flex;
        justify-content: space-between;
    }

    .nav-right {
        list-style-type: none;
        padding-left: 0px;
        margin-bottom: 0px;
        align-items: center;
        display: flex;
    }
</style>
