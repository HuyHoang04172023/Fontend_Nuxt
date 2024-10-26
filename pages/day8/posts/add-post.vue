<template>
    <div>
        <h1>Thêm Bài viết Mới</h1>
        <AddPostForm />
        <NuxtLink to="/day8/posts">Quay lại danh sách</NuxtLink>
    </div>
</template>

<script setup>
import AddPostForm from '~/components/day8/posts/AddPostForm.vue';

</script>