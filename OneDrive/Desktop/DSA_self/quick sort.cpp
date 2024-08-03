#include<iostream>
using namespace std;
void printArray(int arr[],int size)
{
	for(int i=0; i<size; i++)
	{
		cout<<arr[i]<<" ";
	}
	cout<<endl;
}
//partion method
int partition(int arr[], int low, int high)
{
	int i;
	int j=low-1;
	int pivot=arr[high];
	for(i=low; i<high; i++)
	{
		if(arr[i]<pivot)
		{
			j++;
			swap(arr[i],arr[j]);
		}
	}
	swap(arr[j+1],arr[high]);
	return j+1;
}
void quickSort(int arr[], int low, int high)
{
	if(low<high)
	{
		int position=partition(arr,low,high);
		quickSort(arr,low,position-1);
		quickSort(arr,position+1,high);
	}
	for(int i=0; i<=high; i++)
	{
		cout<<"Pass :- "<<i+1<<endl;
		printArray(arr,high);		
	}
}
int main()
{
	int array[]={38,27,43,3,9,82,10};
	int size= sizeof(array)/sizeof(array[0]);
	cout<<"Array before sorting :- "<<endl;
	printArray(array,size);
	
	cout<<"Array after sorting :- "<<endl;
	quickSort(array,0,size-1);
	printArray(array,size);
}
