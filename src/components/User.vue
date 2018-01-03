<template >
   <div class ="container">



    <vue-good-table
      title="Table User" 
      :columns="columns"
      :rows="rows"
      :defaultSortBy="{field: 'dt_Start_Log', type: 'def'}" 
      :paginate="true"
      :lineNumbers="true" />
      
  </div>

</template>
<script  >

export default {
  name: 'test',
  data(){
    return {
      columns: [
         
        {
          label: 'State Code',
          field: 'cd_cebroker_state',
          filterable: true,
        },
        {
          label: 'Pro Code',
          field: 'pro_cde',
          type: 'number',
          html: false,
          
        },
        {
          label: 'Profession',
          field: 'cd_profession',
          html: false,
          
        },
        {
          label: 'License ID',
          field: 'id_license',
          type: 'number',
          html: false,
          
        },
        {
          label: 'Cycle End Date',
          field: 'dt_end',
          type: 'date',
          html: false,
          inputFormat: 'YYYY-MM-DD',
          outputFormat: 'YYYY- MM- DD',
          filterable: false
        },
        {
          label: 'Compliances Status',
          field: 'ds_compl_status_returned',
          html: false,
          
        },
        {
          label: 'Client ID',
          field: 'id_client_nbr',
          type: 'number',
          html: false,
          
        },
        {
          label: 'Start Log Date',
          field: 'dt_Start_Log',
          type: 'date',
          html: false,
          inputFormat: 'YYYY-MM-DD',
          outputFormat: 'YYYY- MM- DD',
          filterable: true
          
        },
        {
          label: 'End Log Date',
          field: 'dt_end_log',
          type: 'date',
          html: false,
          inputFormat: 'YYYY-MM-DD',
          outputFormat: 'YYYY- MM- DD',
          filterable: true
        },
        {
          label: 'Enviroment',
          field: 'cd_environment',
          html: false,
          
        },
        {
          label: 'Machine',
          field: 'cd_machine',
          html: false,
         
        },
        
      ],
      rows: [],
    };
    },
    methods:{
searchdate(dat){
    alert("fecha "+ dat)
}
    },
    
   created(){
        this.$http.get('https://api.cebroker.com/v1/cerenewaltransactions/GetLogsRecordData?startdate=[08/03/2017]&enddate=[04/30/2020]&state=[OH]')
        .then(res => this.rows =res.body);
    }
}

/*
export default {

    
data() {
    
    return {
    
      users: [],
      newUser: {}
    };
  },
  methods: {
    addUser() {
      this.users.push(this.newUser);
      this.newUser = {};
    },
    deleteUSer(user) {
        this.users.splice(this.users.lastIndexOf(user),1);//eliminando

    }
  },
  
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.users =res.body);
    }
    
}  */



</script>
<style>

</style>
