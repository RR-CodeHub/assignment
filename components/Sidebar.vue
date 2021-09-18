<template>
    <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <nuxt-link to="/dashboard"><i class="fa fa-th-large mr-2 menu-icon" aria-hidden="true"></i> <span class="menu-title-text">Dashboard</span> </nuxt-link>
                    </li>
                    
                    <br>
                   
  
                </ul>
            </div>
        </nav>
    </aside>
</template>
<script>
export default {
    name:"Sidebar"
}
</script>