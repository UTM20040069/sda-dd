import express from 'express';
const router = express.Router();

router.get('/',  (req, res) => {
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
            {
                headers: { Authorization: "Bearer "   + process.env.HF_ACCES_TOKEN },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
    
    query({"inputs": {
            "question": "What is my name?",
            "context": "My name is Clara and I live in Berkeley."
        }}).then((response) => {
        console.log(JSON.stringify(response));
        res.send(response);
    }); 
            
                           
});

export default router;
