# Memory-leak-angular

## What is a Memory Leak?
 - In general, a memory leak occurs when an application fails to get rid of unused resources.
## What causes a Memory Leak?
 - unecessary API calls.
 - Ensure none of the state tree is mutated.
 - Not Unsubscribing to any Observables. 
 - Event Listeners (DOM events that are never unregistered).

## Debugging Process
 - Monitoring Memory with the Performance Monitor tool (Chrome Dev Tools).
 - Memory Snapshots.
