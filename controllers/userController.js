const { User } = require('../models');
const { ObjectId } = require('mongoose').Types;

module.exports = {

    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
        res.status(500).json(err);
        }
    },
    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');

        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' })
        }

        res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No course with this id!' });
            }

            res.json(user);
        } catch {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            } else {
                res.json({ message: 'Thought successfully deleted!' });
            }
            
        } catch (err) {
        res.status(500).json(err);
        }
    },

};
