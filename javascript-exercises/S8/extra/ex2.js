fetch('http://localhost:3000/diary')
.then((res) => res.json())
.then(diaryData => {
    const notes = orderDiary(diaryData)
    eliotDiary(notes)
});

const orderDiary = (diaryData) => {
      return diaryData.sort((a,b) => new Date(a.date) + new Date(b.date))
      }

const eliotDiary = (tdiarys) => {
        for (const tdiary of tdiarys) {
            const div$$ = document.createElement('div');
            div$$.innerHTML = `<h3>${tdiary.title}</h3><h5>${tdiary.date}</h5><p>${tdiary.description}</p>`
    
            const button$$ = document.createElement('button');
            button$$.textContent = 'X';
            button$$.addEventListener('click', () => removeEliotDiary(div$$))
            div$$.appendChild(button$$);
            document.body.appendChild(div$$);
        }
    }
    
    const removeEliotDiary = (diaryNote$$) => {
        diaryNote$$.remove();
    }
