import './FilterButton.css'

function FilterButton({ setStartYear, setCategory }) {
  return (
    <div className='filterWrap'>
      <div className='filtres'>
        <div className="filter decada">
          <button onClick={() => setStartYear(1980)}>1980 - 1989</button>
          <button onClick={() => setStartYear(1990)}>1990 - 1999</button>
          <button onClick={() => setStartYear(2000)}>2000 - 2009</button>
          <button onClick={() => setStartYear(2010)}>2010 - 2019</button>
          <button onClick={() => setStartYear(2020)}>2020 - 2026</button>
          <button className='totbtn' onClick={() => setStartYear(null)}>Netejar</button>
        </div>
      </div>

      <div className='filtres'>
        <div className="filter genera">
          <button onClick={() => setCategory('Arcade')}>Arcade</button>
          <button onClick={() => setCategory('Acció')}>Acció</button>
          <button onClick={() => setCategory('RPG')}>RPG</button>
          <button onClick={() => setCategory('Estratègia')}>Estratègia</button>
          <button onClick={() => setCategory('Aventura')}>Aventura</button>
          <button className='totbtn' onClick={() => setCategory(null)}>Tots</button>
        </div>
      </div>
    </div>
  );
}

export default FilterButton;