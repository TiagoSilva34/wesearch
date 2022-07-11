const Ex03: React.FC = () => {
    function checkIfTheFirstLetterIsUppercase(word: string) {
        if(word.charAt(0) === word.charAt(0).toUpperCase()) {
            return true
        } else {
            return false
        }
    }

    console.log(checkIfTheFirstLetterIsUppercase("Teste"))
    console.log(checkIfTheFirstLetterIsUppercase("test"))

    return (
       <>
       </>
    )
}

export default Ex03