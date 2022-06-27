/* ### Celsius em Fahrenheit ###

    Crie uma função que receba string em celsius ou
    Fahrenheit e faça a transformação de uma unidade para
    outra

    C = (F - 32) * 5/9
    F =  C * 9/5 + 32

 */

    function transformDegree(degree){
        const celsiusExists = degree.toUpperCase().includes('C')
        const fahrenheitExists = degree.toUpperCase().includes('F')
        
        
        if(!celsiusExists && !fahrenheitExists){
            throw new Error('Grau não identificado')
        }
    }
    
    try {
        transformDegree('50F')
        transformDegree('50Z')
    } catch (error) {
        console.log(error.message)
    }    