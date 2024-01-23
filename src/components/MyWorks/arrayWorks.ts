import bookshare from '../images/gif/bookshare.gif'
import collaps from '../images/gif/collaps.gif'
import github from '../images/gif/github.gif'
import pogoda from '../images/gif/pogoda.gif'
import ticTacToe from '../images/gif/tic-tac-toe.gif'
import posts from '../images/gif/posts.gif'

export interface iArrayWorks {
    id: number;
    works: any;
    title: string;
    link: string;
}

const arrayWorks: iArrayWorks[] = [
    { id: 1, works: bookshare, title: "Обмен книгами", link: "https://goncharenkovitaliy.github.io/BookShare/",},
    {id: 2, works: collaps, title: "Эффект выпадения", link: "https://goncharenkovitaliy.github.io/Collapse/"},
    {id: 3, works: github, title: "Поиск GitHup", link: "https://goncharenkovitaliy.github.io/SearcheGithubRepository/"},
    {id: 4, works: pogoda, title: "Погода быстро", link: "https://goncharenkovitaliy.github.io/weather-forecast/"},
    {id: 5, works: ticTacToe, title: "Игра крестики нолики", link: "https://goncharenkovitaliy.github.io/TicTacToe/"},
    {id: 6, works: posts, title: "Список постов", link: "https://goncharenkovitaliy.github.io/List-of-posts/"},
]
export default arrayWorks
