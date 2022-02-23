import React from 'react';
import '../../App.scss'
import './Users.scss'
import {UsersPropsType} from "./UsersContainer";
import Image from "../System/Image/Image";


const Users = ({users, follow, unfollow, setUsers}: UsersPropsType) => {

  if (users.length === 0){
    setUsers([
      {
        id: 1,
        imgUrl: 'data:image/jpeg;base64,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',
        followed: true,
        fullName: 'Dimaa',
        status: 'I am fine thanks',
        location: {country: 'Russia', city: 'Moscow'}
      },
      {
        id: 2,
        imgUrl: 'data:image/jpeg;base64,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',
        followed: true,
        fullName: 'Sasha',
        status: 'I am fine thanks',
        location: {country: 'Ukraine', city: 'Kiev'}
      },
      {
        id: 3,
        imgUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcUFRUYGBcaGCAaGhcXFxodHR4XHBsaGhsbGBwbISwkIB0qHhsXJTYlKS4wMzMzGiI5PjkxPSwyMzABCwsLEA4QHRISHTIiICkyMjIyMjIyMjIwMjIyMjIwMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwUGAQIEBwj/xAA/EAACAQIDAwsEAQIFAgcBAAABAgMAEQQSIRMxQQUGIjJRUmFxgZGhFHKx0UIHgiMzYsHh0vAWQ1Oys8LxFf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EAB0RAQEBAQACAwEAAAAAAAAAAAABEQIDIRIxUUH/2gAMAwEAAhEDEQA/APXYIUyL0V6o4DspmxTur7CiDqL9o/FNoFbFO6vsKNindX2FNooFbFO6vsKNindX2FU7nHzgmXExphwWWOXLIoynaPsJZ2hHEMI0Uj/VInYRVtweKSWNJYzmR1Dqw4qwuD7GiaZsU7q+wo2Kd1fYU2iilbFO6vsKNindX2FNooFbFO6vsKNindX2FNooFbFO6vsKNindX2FNooFbFO6vsKNindX2FNooFbFO6vsKNindX2FNooFbFO6vsKNindX2FNooFbFO6vsKNindX2FNooFbFO6vsKNindX2FNooFbFO6vsKgtkvdHsKsVV+gm4Oov2j8U2lQdRftH4ptBiovnDyn9PA0irmkNkij4vM5yxp6sRc8Bc8KlKofKsTco8ofTrIyYfCANK0ZszTSAgIjfxIXMCwNxdxoSCCVl44sLLydC0yF1mlkmdnUEyPh5s7tc6Xd7AeIHCpTm24gmlwRIyD/Hw3YYJWJZF7ckmYableOuTH8lQQYrk6OGKONGllDKihcwGHkPSsOkeOtZ5ycirhwuNwqFHw5LmKO4R4j/mjINA5S5uBqVW97C0FxrgwnKkUrvHG2ZksW6LZdSy9FiMrWZHU5SbFSDY1A8u8vyHBTywwSi8TGKcNCUIZehItpC1tQ1it/Co3DzussaRQyqrvHGmVo1P0uEQsQv8AiW1lZlOtij7zoKaa9AoqI/8A7HTEexk2hGYR7TD5su7Nl2t7eNdEOPzGxikXWxuEYA7+ls2a28b+2qrvrnxmJWON5HNkRS7HsVQWJ9hTHkA3kDzNVnnVyjFJgptnIkiAoshRswWNnTPmK3t/hljrwolIblmaJlmlzFWwskzwAL0HLwrh4lO/OczoSTZmzHQAASXJUs31MkckhfLBE7WACrK7zZhHYXy5VUWJJsFO8kmF5YkUqMVJcK+LgzLlbMkETl4lZLZszS9LLa95AtripfASzRl2fCys0rbR3RoSFuAqxkNIDdEVFJAIJDHjUFhqM5YxzRiNI7GWWQRpmuVBsWd2A1IVFZrXFyALi96j+cHLMqYdykEqyNaONm2dhLIwjjOknfZf+Kj+UOUXTF4YbCZmXDzBIi0Rd3LQKDcSEAWDXYnTMTuuQLUxgOUrTy4eSRWYOqxk5VZiYhKyWFgWUXbQDost+0zdVbkbIC21gLYhJDJI+WJyksq7kyOzKBGFQccirffrL8kcsRYkSGIkiOVomJUgF1ALZb7xqNaEqTopEs6LlzMq5myrcgZmIJsL7zYE28DT6qiiio3lTlaLDhTIxu7ZURVZ3dt9kRAWbTU2Gg1NBJUVHYPlRHbJlkR7XCSoyEqN5UkWa1xexNri9ripGgKr9WCq/QTcHUX7R+KbSoOov2j8U2gj+WMaYYXkVczgWRO9KxCon9zlRfxqucxcF9NJjMM7ZpBJHKzn+e0iTMwvw2iy1L8rNaSNmjkdI7uojXNeQ3QEi46qljrxYH+NQfLOOZ3jmihxkWIjBCk4ZnR0Ni0coQm6Gw1BuDqN1RmpnluG+KwD92eQcf5YWf04VLY3EJFG8jmyIpZj/pAJPxVKbnRJIYHk5NxqtHIZOhCXW5ilj6JbKf8AzOIGntWY+VpcXIu3wmIigRw6xbGRmkkU5kaR7BVRSL5Be5AueBGxx8q3w+CxGCdXAETYiFUvYQLleSNmb+KOSpA1yOlgdasuKhkkMUscLRvEG2YJiN0ZbFCitbKbJudbFRra4KOcWBXHRbPJNE4vkcpawdSjqb3BVkZgVNr6bqs2Hjyoq3vZQL9tha9CRV4cG4n+p2OJ2rJla5wxT7lXa9FgAFvc6DW5JJ2w2EkinaZIZjnRtoHaIlpNMrqBLkXQWNlG4VZHl1yjVrXt2DtJ4f8AFMW/G3pRcQXKIGIhkgfDzhXUq2VoQ1j5yH5FRq8kgGa6Yt1nAE0cgw7K4ClLdEgqMullIGgtarc6A7x/34VzTF0GYdNRqVPWA7VPHyPvVMV5cIGjeOWPEyDojMUjDqUsyMHVr51OUht9xc3qTwuNdRZ0xEm6zGNAfM5CBc+AA8K7oOlmZWIBYEEW3FEte4NETs5IJtl0OXS5uwvrw0oI3lVxPHs2inWzI6sEF1eNlkRhckGzKNOO6o/E8nCZ9pKcUJNmY80CNFZCyuQLFmvmUHreFraVYNo2bJc6XNwBcgBSB2X6Xx402BjmKm9rAjNa/HTThp+aGIGHDIjySocWryW2jCJTmKjKpKGMqCBpdVBNhe9qhMSj4UzSwiRBKpQZlku+KmkRI5HQgIjKzN1LZgyiwyivQqj+WeT9vHkDZWDo6ta9njdXQkcVzKARcXBOo31MLHFNionaNJIJHeO0iBkUspF1EgGa4PWF/Ou+PlBSQpSUE6C8T29WAIHmSK4k5GfbHEmYrKyiNsigI0aklVZGLG4ZnIYEHpWpM/N6Ry5ONxQzMrqFdFCOjX0AXVDuKnQjtNiAnZJFVSzEKoFySQAB4k1EcoxQxSNj5Cx2cOTQZgqFs5ZQBcE6XINrKL7q5cdzWMqOj4zEFXdXAJiOV1ykFTs7hcyq2UEC9SMfJzbJoXZChj2YRY7IFy5dVdnvppYm1uBoObC4eWadJ5UMSRhtlESpcuwytJKVJVejmVVBOjEk3sFnq58MjKiqzF2CgFyACxAsWIUAAk62AA1roqqKr9WCq/QTcHUX7R+KbSoOov2j8U2gKKKKAoorRnA3kDzoN6KT9QveHvp71urAi4Nx2ig5WjZXLgXDABhxBW9it9+h3U8TL22+66/Bp1FAkzL2j0Nz7CkzFnBVQVBFi5FtDvyg6387etbYvGxxDNI6oO1mA9r76hpeeODXQSFvtjb8kAUS9SfdTcEORSFAHZ5ABRf0ArH04vutv1BINybnUHdcmq//AON8L2SH+0f7tS359QDQRyn0T/rrPyifPn9WRoAfO4JIJBvYDQjUaVtFFlJtx4kkk+ZNVtefEB3xyj0T/rrrg514Zt7Mv3K3/wBbinyn6nz5/VgorlwuNjkF0dH+1gfccK6q02KKKKAooooCiiigKr9WCq/QTcHUX7R+KbSoOov2j8U2gKKKUZRfKNTxA4edASsQNO3U9g4mhFXeLHx3/NbKTxFvW/8AtWjRDeOie0ae/A+tAShtMtrcRe3lqAa58Jh1AzAm+ZidWAvcg9G9refnWZMQ0ZGfVSbZhpYndnHZ4j2FEQbLdTxbokaHpNx3ig7Cao/Obnwkd4sMQ77jJvRft4M3wPHdVd5586pJ3OHiYpCDla2+QjrZj3Abi3G1ze4Aq0dwbHwse0VnXLvu/Ud82IeRi8jF2O9mNz/+eFYDUpWraq81M2hGtOVxbS3rS0S9ZUcK5d5pPcdCtWTJwHxS1W+6mxra1Y0xvGzqcwuCNQQbEeVtRVx5s85Wb/DmObscAkjUABwBre4AYcbA7xeqpIDod1TPI0IjxqJoRci/eUo9j5EZT6046utePqyvRAazWL0A16XsZorVWB3G9bUBRRRQFV+rBVfoJuDqL9o/FNpUHUX7R+KbQFcEV0Z8wJUsWDAXte2jAai1tDut2V30UC1kB3EHyIoaRRvIHmRWWQHeAfMUKgG4AeVBx4pTIMgBCm2ZiLaA3soO8nt3Vz8sY76bCyzHeqsQCf5sTlHqxUetS1UP+qGLTYLFtBnLhtkCLkC/ScbwgF/MleylTq5Hm+GXQ3OvE10BdK5sO2tq649RXN5emUFMtWt63UX401zpsTVpJoRb3pyppWsqabqzZq82T7ZibWulWIrnw9geB4U/0NY+NTroZ7m1jft/5qV5CgEsyLJuIK79xCvltp22IqKV76D4rrwWIyupG9WBFu0EUnonT0XCJlyrIwYJpc7s+VDfXdva3Ze3ZTJQtxa2Q2ZgN38hc24Xy38teNdwTd4fPnQU0316XvckOrggqdDmyDThYMb7+z1rvpeTW/xwplAUUUUBVfqwVX6Cbg6i/aPxTaVB1F+0fim0BRRRQFFFFBivIf6jYstOsWVURQWyqOld7dKThmIUEDeA2u+w9bdgASTYDUk8BXhfOfFLNipXjUKmbKoAsSB/JuJZjdiTrrY7qz19Md30jENOMxtYXpCI3ZXZGh7BWXDqwRJprTQfCtWU1uqnQ1MYtdWHktvroQ3rhQ2pqOdbGlZsOZQpvcU5pLVzrJWFmF7b/KpWcdaPxtvrr5JI+oiLbtotxw6w197VH5jWwY1knq69loqE5scqbeEZj016LePY3qPm9Tdd5dfQ5ss2M0UUVVFFFFAVX6sFV+gm4Oov2j8U2lQdRftH4ptAUUUUBRRRQcXKaMYZAqhmyNlU7iwBKg+BNq8CxMbKzJfphirX16QNj83r37lDGJDG8sjBURczE9g/J4AcSa8HkxCyTSS2sJJHcC+7Mxa3pes9OXkbIpA1Hn5029YzX3bu006TCyIodo3Cn+ZRgvobWrLz/ZfCtxIQK0UXrZhRGt70xGtWoNqzelTTA4vWy7tK0W3ZrW6CpYmnpW6yVoHFdODCNJGjdVpFU8NGYA/BrOImOZ+NZcUq/wAZAVPoCyn3Hya9KqFwHJGGw5zKtm7zkm3kToPSpkG+orrzMj2+Pm885W1FFFadBRRRQFV+rBVfoJuDqL9o/FNpUHUX7R+KbQFFFFAUUUUEDzp5Okni2aOkYN88rgsUS2pjXQZ7XsxIy6ka7vB8Lpr2/wDfpXtvPvbPDHh4TZsRKIzrboZJHe54LZNfC41vavJ+WMGIJpIQc2Rsua1rkAXNr6a3rPTl2wj3407C4t4iSjshPdJW/nbfUdGDXTrWXmvpIPiw/XRSe8gCN65RkPqt/GsBQeo1/BrKfk2Pob+FcSAjsNG09PCiOllIJBBBHA6H1BpYehOUbDLow7rgkAcbHQr/AGkV0KsT9V9mex9U9HUXH9wt2tQ+JIamZ/Gl4rCvFYupAPVbQq32Ot1b0NLV6lTDy44VM82UV8VErAnpggAgar0rnTUaVBI1XD+nuHR53Ykh0To24ZjZj520/uNOZ7b4m9SPRJVY7iLW4339ptv8ritMHAqqpF+rvJ7dd26tTOyMFe1m0VxuvwVhwPjx8KxGWVFYNcBASptawUXsbXv511e13UVyrnYZg1uxbC1uGbS9/IilJOXGa7KNLBVzG+UE36J7benjQd9Fc+HcstyNdRuIvY2vY6i/ZXRQFV+rBVfoJuDqL9o/FNpUHUX7R+KbQFFFKaQXtvPYNffsoMSMbgDjx8uzx/RrOzHHXz1/4rJGYaj0NaFGHVPo2o99/wCaCvc7Y3RY50jzCCTaOFAzNGUeOS1tbqr5hYfxryvnCrDFzq2pErAk8dbg+osfWvbpMUCGRhlbKSAdxFjqp4/nwrzDnty9HLLkjSIlbqZBZ2PC2YaDjYXJF/4ms9OXknpVE7KYb1hd1ZzVMea6yrW30tpcx4AD3od6WkdhpUMbvrRGRatQhrBUjsqjuwmPeO+Rui3WRgGRvvRui3qKZjoLS5Y1PSWNgigmxeNHKjibFiPSokE3t27q9L5IVElxk5NnaU4eI26qrImHZwdwGdox/YfGpjfM30ov00gOUxvm7uRr+1r16LzC5IaAPLL0HcAKh6wUG5LAa3Jtpv08ameR+SpQ7z4mVmdi2WMOdmiXNgF6pa1rtb/cmerU5dePHl1xyxNIV0sinNrvYjdpwHnrXRsugE4Zcp8rWp1FadnOIrEkEjW+W+hvvPhxOnGtVw9tASosBcHfYW18fHwrqooFRLYAWt8/PbTaKKAqv1YKr9BNwdRftH4ptKg6i/aPxTaDBri5PeyhG0cdYH+R4sO0HfXdWjoDoQCPEXoN6RisQkaM7sFVRdmJsABxNZEI8fRmH+9eU/1E5wCSY4RT/hx2zm56Um+2vBQR/cT2Cpaz11k1y87ueEmKYxxApCL24O/AluxSP4+99wqcNw2u6mXHbWrEVjXnvVrpJrQGlh6C9GTL1sWpKtRnPZQOJpLA6VqzmsetXCOrAR5poh2yxj3dR/vXp3JWEhxwxqXIjEqwqUIDWiO0Li4tdpXka9tbivKopCrBlNmUhgewg3B9xU9zL5yfRznNrDJZXHYRukHlc37R5CkdOL+vZcBhjHGqGSSS2meQqWPmQBf8111wDElgGVkCnVb3OZeBzA7j5H1rrifMobdcXsfGtvQZRRRQFFFFAUUUUBVfqwVX6Cbg6i/aPxTaVB1F+0fim0BRRRQFRcPIWFRmZcPEGYlmbZqWZmJJLMRckkk6mpSigh8fzbwkwIkw8RuLZggVh5OtmHoa8x558y2wg20JaSG/SB1aO5sLkdZL6X3jS999ey0nEwK6MjgMrAqyncVIsQfSlY64lfNxktWUkvTeUuTzDPJC2uSRkB7QrEKT5rY+tc5Tsrm4+odnI4aVnaGkLetgaamQ7NWUrSOsO3AGiMnU+tZy1smlDkCiav8A/TfnA1/onc2sTCdL6XLRgnwuR2Wbwr09Nw0tpur5ww2LaN0kQ2ZGDr9ym49NK+iOT8UssSSr1XRXHkwDD81qPR4+tmOqiiitOgooooCiiigKr9WCq/QTcHUX7R+KbSoOov2j8U2gKKKKAooooCilFyeqL+J3f80EG1y1vID/AHvQeG/1BjK8o4gcCyMPIxR3+c1V3NV1/qrhcuKilvpJFbUAG6MdTb/S6e1UgGsV5+5lbK9bZawAL1k1MYrAvWBvrLsBWqCtI3JrDms5aWxoRi9e7/0+lzcnYc9isvorso+AK8IIr3T+nItybh/J/wD5XpHbx/a0UUUVp2FFFFAUUUUBVfqwVX6Cbg6i/aPxTaVB1F+0fim0BRRRQFYvXNipCCijTM1s3ZoTp4m1qcsYHDXtOp9zQaZCOrYi97HtOpsax9QAbHok7s3HyO4nwveuitHQEEEAg7waCof1D5F+owpEa/4kYaVFUasVsGUAbyVZreNq8TU31H5096+ieT75iLkopdVJ7LppfiAQwv4V5nz35CbBTti4I1aKQ72QMsMrHeqnTUglSQQpa1urWbHPvn+q1huR3EgSYGJr6RnSRgLktY6LGACTI2lgSoa1q3xccc0kjQoscUcW831C6KWJJJkkc2F9dRwU1nE4p2jjjzmWeQXd97CNyDHDnOrE6O1zpdV0AYVzyOXyYSJgVzi7cHlIylzbXItyF8AW3saOVjgdCCCQd1xcW0PHx862LVYZcLHIuIxTkiJIsmFj1BbKBDE7cQuazkfybPwVqh25KkCZrAkRbZkHWSLMiq7jhmzAgb8uu40xmxzFqTffUmnJZEksch1SFpUKEFXCptFKtbVWQNqNx8iK7eUXicyR2jRcu0wkixqgMep2MuXVibFczEkSI1zZjZIYgAa93/p6LcnYf7W/9714Qte88wxbk/DfYT7sxqx08f2sdFFFV3FFFFAUUUUBVfqwVX6Cbg6i/aPxTaVB1F+0fim0BRRRQLkjDCxFx2GtBEw0DXH+oX+QQfe9PooF2btX2P7pbQlusxI7BoPXj810UUC1jAtYAWFhbs8KXiMMjoyOoZGBDKwuCDvBB3iuiig8j5e5myYJpJcNGZoHVlZR/nQqwIJiYgkixIzWJsSCD1hUeQ9kpmmZ+giZY16ryNIWUBcpNjsxJcgnLcHXS/0TVT5x8w8LiyXymKU75I7C57XXc3nofGpjn1x+PMsS4SJJpVGaQ7RIioyPYBIQVGmyjQFrcdoq96yOScUWaV5GYtPIkDseO2EuYnyKrpwuOypjl/mJjwwcFcQqqqKUIUrGi5VURtYKABuUneTvJqPcY2HDRRrFMrrLIxU4dgQMsezGbJcgky6g+F6OWWUnkBhKyYeQ2cLIkRYkD/EjdWiPmzBl/wBVx/LSN5OxJJWNmjyMT/mpdFZhYG+jR3IUFlIsNTe1SeL5ExMmJkfDYecqZDJGxidAuZs6i8gABUm39tT2F/pxiZpGeTJhkZs2QNtGF9SAFsoF726WgsOFCSqpyjgWTZjZNFI5KmE3JzAqqlASWKuSQLk3KmxItXuvNvAtBhIIn66RqrfdbpW9b1H83eZuEwZDRpmk/wDUksW/tAAVfQA1Zarrxznus0UUUdBRRRQFFFFAVX6sFV+gm4Oov2j8U2oOHGvlXpcBwHZ5Vv8AWyd74H6oJmiob62TvfA/VH1sne+B+qCZoqG+tk73wP1R9bJ3vgfqgmaKhvrZO98D9UfWyd74H6oJmiob62TvfA/VH1sne+B+qCZoqG+tk73wP1R9bJ3vgfqgmaKhvrZO98D9UfWyd74H6oJmiob62TvfA/VH1sne+B+qCZoqG+tk73wP1R9bJ3vgfqgmaKhvrZO98D9UfWyd74H6oJmiob62TvfA/VH1sne+B+qCZoqG+tk73wP1R9bJ3vgfqgmar9P+tk73wP1UL9U/b8D9UH//2Q==',
        followed: false,
        fullName: 'Vasya',
        status: 'I am fine thanks',
        location: {country: 'USA', city: 'New York'}
      },

    ])
  }

  return (
    <section className="users section">
      <div className="users__text section__text">Users</div>
      {users.map(u =>
        <div className='users__wrapper'>
          <div className="users__item" key={u.id}>
            <div className="users__avatar">
              <Image src={u.imgUrl} alt={'avatar'} className='users__img' width={100} height={100} circle={true}/>
              {u.followed ?
                <button onClick={() => {unfollow(u.id)}}>Unfollow</button>:
                <button onClick={() => {follow(u.id)}}>Follow</button>
              }
            </div>
            <div className="users__body">
              <div className="users__info">
                <div className="users__name">{u.fullName}</div>
                <div className="users__status">{u.status}</div>
              </div>
              <div className="users__location">
                <div className="users__country">{u.location.country}</div>
                <div className="users__city">{u.location.city}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Users;