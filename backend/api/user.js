const bcrypt = require('bcrypt-nodejs');

module.exports  = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {

        const salt  = bcrypt.genSaltSync(10);

        return bcrypt.hashSync(password, salt);
    }

    /*
        INSERIR OU ATUALIZAR USUÁRIO
    */
   
    const save = async (req, res) => {
        const user = { ...req.body };
        
        if(req.params.id) user.id = req.params.id;

        try{

            existsOrError(user.name, 'Nome não informado');
            existsOrError(user.email, 'E-mail não informado');
            existsOrError(user.password, 'Senha não informada');
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida');

            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem');

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first();
            
            if(!user.id){
                notExistsOrError(userFromDB,'Usuário já cadastrado!');
            }

        }catch(msg){
            return res.status(400).send(msg);
        }

        user.password = encryptPassword(req.body.password);
        delete user.confirmPassword

        /*
            SE A CONDIÇÃO FOR VERDADEIRA: ATUALIZAR USUÁRIO
            SE FOR FALSA: CADASTRAR USUÁRIO
        */

        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        }
    }

    /*
        PEGAR UMA LISTA DE USUÁRIOS
    */
    const get = (req, res) =>{
       app.db('users')
            .select('id','name','email','admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err));
    }
    /*
        SELECIONAR USUÁRIO COM ID INFORMADO
    */
    const getById = (req, res) =>{
        
        userFromDB = app.db('users')
            .select('id','name','email','admin')
            .where('id',req.params.id)
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err));
        
     }

    return { save, get, getById };
    //
}