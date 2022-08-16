'use strict';
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Desks', [{
      name_desk: 'eat',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name_desk: 'elbrus',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name_desk: 'history',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name_desk: 'kino',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    const words = fs.readFileSync('././vopros/eat/eat.txt', 'utf-8');
    const wordsAnsw = fs.readFileSync('././vopros/eat/eat_answ.txt', 'utf-8');
    const arrWords = words.trim().split('\n');
    const arrAnsw = wordsAnsw.trim().split('\n');
    const newArr = arrWords.map((body_q, ind) => ({
      body_q,
      answer: arrAnsw[ind],
      desk_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', newArr, {});
    const words1 = fs.readFileSync('././vopros/elbrus/elbrus.txt', 'utf-8');
    const wordsAnsw1 = fs.readFileSync('././vopros/elbrus/elbrus_answ.txt', 'utf-8');
    const arrWords1 = words1.trim().split('\n');
    const arrAnsw1 = wordsAnsw1.trim().split('\n');
    const newArr1 = arrWords1.map((body_q, ind) => ({
      body_q,
      answer: arrAnsw1[ind],
      desk_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', newArr1, {});
    const words2 = fs.readFileSync('././vopros/history/history.txt', 'utf-8');
    const wordsAnsw2 = fs.readFileSync('././vopros/history/history_answ.txt', 'utf-8');
    const arrWords2 = words2.trim().split('\n');
    const arrAnsw2 = wordsAnsw2.trim().split('\n');
    const newArr2 = arrWords2.map((body_q, ind) => ({
      body_q,
      answer: arrAnsw2[ind],
      desk_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', newArr2, {});
    const words3 = fs.readFileSync('././vopros/kino/kino.txt', 'utf-8');
    const wordsAnsw3 = fs.readFileSync('././vopros/kino/kino_answ.txt', 'utf-8');
    const arrWords3 = words3.trim().split('\n');
    const arrAnsw3 = wordsAnsw3.trim().split('\n');
    const newArr3 = arrWords3.map((body_q, ind) => ({
      body_q,
      answer: arrAnsw3[ind],
      desk_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', newArr3, {});
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
