<script setup>
    import { ref } from 'vue'
    import iconUser from '../assets/icons/iconUser.vue';
</script>

<template>
    <nav class="nav">
        <div class="logo-myw">M&W</div>
        <ul class="menu-myw">
            <li><a href="#">Nuestro catalogo</a></li>
            <li><a href="#">Acerca de nosotros</a></li>
            <li><a href="#">Contactanos</a></li>
            <li>
                <a href="#"> 
                    <iconUser/>Clientes
                </a>
            </li>
        </ul>
    </nav>
</template>