const { Router } = require('express');
const router = Router();
const {unlink} = require('fs-extra');
const path = require('path')

const Book = require('../models/Book')

router.get('/', async(req, res) => {
    let book = await Book.find();
    res.json(book);
})
router.post('/', async(req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/'+req.file.filename;
    const newbook = new Book({ title, author, isbn,imagePath});
    await newbook.save()
    console.log(newbook);
    res.json({ message: 'save book' });
})
// router.update('/:id', async(req, res)=> {

// });

router.delete('/:id', async(req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
   unlink(path.resolve('./backEnd/public'+book.imagePath))
    console.log(book);
    res.json({ message: 'delating' })
})


module.exports = router;