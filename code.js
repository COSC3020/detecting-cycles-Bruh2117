function hasCycle(graph, start, visited = []) 
{
    // To detect a cycle we iterate over all edges in a graph
    // and if we run into a previously visited vertex, then we
    // have detected a cycle. 

    // We mark the vertex we're on as visited
    visited[start] = true; 

    // We now start iteratiing through the adjacency list and 
    // following the edges 
    for (var i = 0; i < graph[start].length; i++)
    {
        // initialize next vertex to visit
        vertex = graph[start][i]; 

        // if the vertex hasn't been visited, visit 
        if (visited[vertex] != true )
        {
            return hasCycle(graph, vertex, visited); 
        }
        
        // if it has been visited, we've detected a cycle
        else 
        {
            return true; 
        }
    }
    return false;
}