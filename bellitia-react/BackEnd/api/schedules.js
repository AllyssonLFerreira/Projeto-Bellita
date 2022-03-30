const {Schedule} = require ('../models')

module.exports = (app) => {
    const getSchedule = async (req, res) => {
        try {
            const schedule = await Schedule.findAll()
            res.status(200).json(schedule)
        }
        catch {
            res.status(500).json({error: true, ...err})
        }
    }
    const postSchedule = async (req, res) => {
        const { data, horario } = req.body
        try {
            if(!data || !horario ) throw new Error('Preencha todos os campos!!')
            await Schedule.create({data, horario})
            res.status(201).json({msg: 'Agendamento Concluido com Sucesso!'})
        }
        catch(err) {
            res.status(400).json({error: true, ...err})
        }
    }
    const putSchedule = async (req, res) => {
        const scheduleId= req.params.id
        const { data, horario } = req.body
        try {
            await Schedule.update(
                { data, horario },
                {where: {id_schedules: scheduleId}}
            )
            res.status(200).json({msg: 'Agendamento alterado com sucesso!'})
        }
        catch(err) {
            res.status(400).json({msg: 'Agendamento não pode ser alterado!', Error:true})
        }
    }
    const deleteSchedule = async (req, res) => {
        const scheduleId= req.params.id
        try {
            await Schedule.destroy(
                {where: {id_schedules: scheduleId}}
            )
            res.status(204).json()
        }
        catch(err) {
            res.status(400).json({msg: 'Agendamento não pode ser deletado!', Error:true})
        }
    }
    return {getSchedule, postSchedule, putSchedule, deleteSchedule}
};