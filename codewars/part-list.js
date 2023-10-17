const partlist = (list) => {    
    const respon = []
    for (let m = 0; m < list.length-1; m++) {
        const first = []
        const secound = []
        for (let i = 0; i < m+1; i++) {
            if(i !== list.length) {
                first.push(list[i])            
            }
        }
        for (let j = m+1; j < list.length; j++) {
            secound.push(list[j])
            
        }
        const first_res = first.toLocaleString().replaceAll(",", " ")
        const secound_res = secound.toLocaleString().replaceAll(",", " ")

        respon.push([first_res, secound_res])
    }
    return respon
}

module.exports = partlist
