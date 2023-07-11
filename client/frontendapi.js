import React, { useState } from "react";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const SEARCH_QUERY = gql`
  query SearchExercises($muscle: String!) {
    searchExercises(muscle: $muscle) {
      name
      type
      muscle
      instructions
    }
  }
`;

const SearchExercise = () => {
  const [muscle, setMuscle] = useState("");

  return (
    <ApolloProvider client={client}>
      <div>
        <input
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
          placeholder="Enter muscle group"
        />
        <button onClick={search}>Search</button>

        <Query query={SEARCH_QUERY} variables={{ muscle }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :</p>;

            return data.searchExercises.map(
              ({ name, type, muscle, instructions }) => (
                <div key={name}>
                  <h3>{name}</h3>
                  <p>Type: {type}</p>
                  <p>Muscle: {muscle}</p>
                  <p>Instructions: {instructions}</p>
                </div>
              )
            );
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
};

export default SearchExercise;
