const axios = require("axios");

class cepController {
    async consultaCep(req, res){
        const { cep } = req.params;
        const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`, {
        })
        if (response.status !== 200) return res.status(404).json({ message: "Essa cep não existe!"});
        return res.status(200).json(response.data);
     }    
}

module.exports = new cepController()