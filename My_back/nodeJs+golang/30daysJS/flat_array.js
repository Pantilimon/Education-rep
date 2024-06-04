var flat = function(arr, n) {
    for (let step =0; step < n; step++) {
        for (let i =0; i<arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let l = arr[i].length
                arr.splice(i, 1, ...arr[i]) 
                i += l - 1
            }
        }
    }
    return arr
}