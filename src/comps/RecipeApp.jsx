import React, {useState} from 'react'

const recipes = [
  {id: 1, name: "Spaghetti Carbonara"},
  {id: 2, name: "Pepperoni Pizza"},
  {id: 3, name: "Cheese Pizza"},
  {id: 4, name: "Hawaiian Pizza"},
  {id: 5, name: "Vegan Pizza"},
]

const RecipeApp = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRecipes = recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeApp
