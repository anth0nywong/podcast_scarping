import {spawn} from 'child_process'
import fs from 'fs'

export function HomePage(req, res, next)
{
    let page = req.params.page;
    fileName = 'data' + page + '.json';
    let data = fs.readFileSync(fileName);
    let sendData = JSON.parse(data);
    //res.render('index', { title: 'Express', podcasts: sendData });
    res.json({success: true, message: 'Podcast Retrieved Successfully', movies: moviesCollection, user: req.user});
}
