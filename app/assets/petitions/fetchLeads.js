import { fetchData } from "./fetchData"
const fetchLeads = (successResponse, backendURLBase, endpoints, clientId, dataUser, emailData) => {
        
    fetchData('POST', backendURLBase, endpoints.toSaveLeads, clientId,`&firstName=${dataUser.userName ? dataUser.userName:''}&postalcode=${dataUser.zipCode ? dataUser.zipCode:dataUser.state}&emailData=${dataUser.emailUser}&representative=${emailData.name}&subject=${emailData.subject}&emailMessage=${dataUser.text}&city=${emailData.state}&party=${emailData.party}&sended=${successResponse}`)
    // axios.post(`https://payload-demo-tpm.herokuapp.com/leads?&firstName=${dataUser.userName ? dataUser.userName:''}&postalcode=${dataUser.zipCode ? dataUser.zipCode:dataUser.state}&emailData=${dataUser.emailUser}&representative=${emailData.name}&emailMessage=${dataUser.text}&city=${emailData.state}&party=${emailData.party}&clientId=${clientId}&sended=${respuestaDeExito}`, dataUseryEmail)
}
const fetchAllLeads = async (petitionMethod,backendURLBase, endpoint, clientId, setLeads) => {
   const  leads = await fetchData(petitionMethod, backendURLBase, endpoint, clientId)
    const data = leads.data
    setLeads(data)
    console.log(data)
}

export {
    fetchLeads, fetchAllLeads
}