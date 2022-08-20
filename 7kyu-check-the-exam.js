function checkExam(answers, submitted) {
    let score = 0;
    submitted.forEach((e,i) => {
        if (e == answers[i]) {
            score += 4;
        } else if (e !== '') {
            score -= 1;
        }
    });
    return (score < 0) ? 0 : score;
}