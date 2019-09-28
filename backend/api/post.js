module.exports = app => {

    const { existsOrError, notExistsOrError } = app.api.validation;

    const save = (req,res) => {
        
        const post = { ...req.body };

        if(req.params.id) post.id = req.params.id;
        
        try{
            existsOrError(post.title,'Título não informado');

        }catch(msg){
            return res.status(400).send(msg);
        }

        if(post.id){
            app.db('posts')
                .update(post)
                .where({ id: post.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        }
        else {
            app.db(posts)
                .insert(post)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send());

        }
    }

    const remove = async (req,res) => {
        try{

            existsOrError(req.params.id,"ID não informado");

            const rowsDeleted = await app.db('posts')
                                         .where({id: req.params.id})
                                         .del();

            existsOrError(rowsDeleted,"Post inexistente");
            
            res.status(204).send();
        }catch(msg){
            res.status(400).send();
        }
    }





}