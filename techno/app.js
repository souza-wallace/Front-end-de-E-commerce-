const vm = new Vue({
    el: '#app',
    
    data: {
        produto: false,
        produtos:[]
    },
    filters: {
        numeroPreco(valor){
            return valor.toLocaleString('PT-BR', {style: 'currency' , currency: 'BRL'})
        }
    },
    methods:{
        fetchProdutos(){
            fetch("../api/produtos/produtos.json")
            .then(r => r.json())
            .then(r => {
                this.produtos = r
            })
        },
        fetchProduto(id){
            fetch(`../api/produtos/${id}/dados.json`)
            .then(r => r.json())
            .then(r => {
                this.produto = r
            })
        },
        fecharModal({ target, currentTarget }) {
            if (target === currentTarget) this.produto = false;
          }
    },
    created(){
        this.fetchProdutos();
    }
})