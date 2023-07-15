<template>
    <div class="flex flex-row w-full h-full">
        <div>
            <RouterView />
        </div>
        <div :class="toggleSidebar ? 'sidebar' : 'sidebar-close'" @mouseover="toggleSidebar = true"
            @mouseleave="toggleSidebar = false">
            <div class="border-white border-1 m-2 p-4 bg-white">
                <!-- for logo -->
            </div>
            <div :class="toggleSidebar ? 'flex flex-wrap justify-content-center align-content-center' : 'opacity-0'">
                <div class="flex flex-column bottom-50 fixed">
                    <router-link class="m-2 text-center" to="/">Home</router-link>
                    <router-link class="m-2 text-center" to="/">Services</router-link>
                    <router-link class="m-2 text-center" to="/">Contact</router-link>
                </div>
            </div>
            <div :class="toggleSidebar ? 'opacity-0' : 'flex flex-wrap justify-content-center align-content-center'">
                <div class="flex flex-column bottom-50 fixed">
                    <router-link class="m-2 text-center" to="/">
                        <i class="pi pi-home"></i>
                    </router-link>
                    <router-link class="m-2 text-center" to="/">
                        <i class="pi pi-book"></i>
                    </router-link>
                    <router-link class="m-2 text-center" to="/">
                        <i class="pi pi-phone"></i>
                    </router-link>
                </div>
            </div>

            <div :class="toggleSidebar ? 'flex flex-wrap justify-content-center align-content-center' : 'opacity-0'">
                <div class="flex bottom-0 fixed mb-2">
                    <router-link class="m-2 text-center" to="/">Sign in</router-link>

                </div>
            </div>
            <div :class="toggleSidebar ? 'opacity-0' : 'flex flex-wrap justify-content-center align-content-center'">
                <div class="flex bottom-0 fixed mb-2">
                    <router-link class="m-2 text-center" to="/">
                        <i class="pi pi-user"></i>
                    </router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const toggleSidebar = ref(false)
</script>
<style>
a {
    text-decoration: none;
    color: white;
}
</style>