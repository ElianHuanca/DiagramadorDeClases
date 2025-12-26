minikube delete --all

kubectl get pod

kubectl apply -f backend-secrets.yml
kubectl apply -f backend.yml

kubectl get all

kubectl logs <nombre del deployment>
kubectl get events
kubectl rollout restart deployment <nombre del deployment>

minikube ip 

minikube ssh -- docker images
minikube service backend-service
