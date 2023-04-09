export const controller = (num, setNum) => {
    if (num < 10) {
        setNum(prev => prev += 1)
    }
}


export const calculateMark = (questions, answerts) => {
    let mark = 0

    answerts.forEach(answert => {
        questions.forEach(question => {
            if (answert.id === question.id && answert.answert === question.answer) {
                mark+=1
            }
        })
    })

    return mark
}