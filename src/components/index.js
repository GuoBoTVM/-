import mainContent from './mainContent.vue'
import tabBar from './tabBar.vue'
import appTitle from './appTitle.vue'
import club from './club.vue'
import index from './index.vue'
import message from './message.vue'
import mine from './mine.vue'

const components={
    mainContent,
    tabBar,
    appTitle,
    club,
    index,
    message,
    mine
}
export default{
    install(Vue){
        Object.keys(components).map(key=>{
            const cpt = components[key];
            Vue.component(cpt.name , cpt)
        })
    }
    
}