#include<iostream>
using namespace std;
bubbleSort(int array[],int size)
{
	for(int i=0; i<size-1; i++)
	{
		cout<<"Pass : "<<i+1<<endl;
		for(int j=i+1; j<size; j++)
		{
			if(array[i]<array[j])
			{
				swap(array[i],array[j]);
			}
		}
//		cout<<"Sorted elements are :-";
		for(int i=0; i<size; i++)
		{
			cout<<array[i]<<" ";
		}
		cout<<endl;
	}
}
int main()
{
	int arr[]={5,2,9,1,5,6};
	int size=sizeof(arr)/sizeof(arr[0]);
	bubbleSort(arr, size);
	return 0;
	
}