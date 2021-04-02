import Characters from './Characters';

const DisplayCharacterList = ({characters}) =>{

    return(
        <div className="boxes-card">
            {characters.map (c =>{
                return (
                    <Characters {...c} />
                )
            })}
        </div>
    );
};
export default DisplayCharacterList;