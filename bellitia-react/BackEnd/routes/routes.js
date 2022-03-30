module.exports = (app) => {
    app.get( '/endereco', app.api.adress.getAdress );
    app.post( '/endereco', app.api.adress.postAdress );
    app.put( '/endereco/:id', app.api.adress.putAdress );
    app.delete( '/endereco/:id', app.api.adress.deleteAdress );

    app.get( '/estabelecimento', app.api.establishments.getEstablishment );
    app.post( '/estabelecimento', app.api.establishments.postEstablishment );
    app.put( '/estabelecimento/:id', app.api.establishments.putEstablishment );
    app.delete( '/estabelecimento/:id', app.api.establishments.deleteEstablishment );

    app.get( '/professional', app.api.professional.getProfessional );
    app.post( '/professional', app.api.professional.postProfessional );
    app.put( '/professional/:id', app.api.professional.putProfessional );
    app.delete( '/professional/:id', app.api.professional.deleteProfessional );

    app.get( '/agendamentos', app.api.schedules.getSchedule );
    app.post( '/agendamentos', app.api.schedules.postSchedule );
    app.put( '/agendamentos/:id', app.api.schedules.putSchedule );
    app.delete( '/agendamentos/:id', app.api.schedules.deleteSchedule );

    app.get( '/servico', app.api.service.getService );
    app.post( '/servico', app.api.service.postService );
    app.put( '/servico/:id', app.api.service.putService );
    app.delete( '/servico/:id', app.api.service.deleteService );

    app.get( '/usuarios', app.api.user.getUser );
    app.post( '/usuarios', app.api.user.postUser );
    app.put( '/usuarios/:id', app.api.user.putUser );
    app.delete( '/usuarios/:id', app.api.user.deleteUser );
};