<template>
    <div>
        <nuxt-link :to="'/project/' + project.id + '/'">
            <div class="flex relative bg-contain bg-center bg-no-repeat xl:p-4 items-center justify-center project-thumb" :style="{backgroundImage: 'url('+ project.image +')'}">
                <div class="xl:text-5xl font-semibold absolute z-20">
                    <h2>{{ project.title1 }} <span v-if="project.title2">{{ project.title2 }}</span></h2>
                </div>
                <div class="flex w-full h-64 xl:h-full bg-black opacity-75 absolute z-10 overlay"></div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props: {
            project: Object
        }
    }
</script>

<style scoped>
.project-thumb{
    height: 715px
}
.project-thumb h2{
    transition: all 1s cubic-bezier(0, 1, 0.5, 1);
}
.project-thumb:hover h2{
    transform: scale(1.2);
}
.projects ul li .project-thumb{
    -webkit-clip-path: polygon(0px 15%, 100% 15%, 100% 85%, 0% 85%);
    clip-path: polygon(0px 0, 100% 0, 100% 100%, 0% 100%);
    transition: all 1s cubic-bezier(0, 1, 0.5, 1);
}
.projects ul li:hover .project-thumb{
    transform: scale(1.1);
    -webkit-clip-path: polygon(0px 15%, 100% 15%, 100% 85%, 0% 85%);
    clip-path: polygon(0px 15%, 100% 15%, 100% 85%, 0% 85%);
}
</style>