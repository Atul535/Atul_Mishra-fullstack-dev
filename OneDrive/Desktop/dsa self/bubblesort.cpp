#include<iostream>  
using namespace std;
void bubbleSort(int arr[], int s)
{
	for(int i=0; i<s-1; i++)  //for number of passes
	{
		cout<<"Pass "<<i+1<<endl;
		for(int j=0; j<s-1-i; j++) //for numbers or values
		{
			if(arr[j]>arr[j+1])
			{
				swap(arr[j],arr[j+1]);
			}
		}
		for(int k=0; k<s; k++)
		{
			cout<<arr[k]<<"  ";
		}
		cout<<endl;
		
	}
}
int main()
{
	int arr[]={3,6,4,7,5,10};
	int s=sizeof(arr)/sizeof(arr[0]);
	bubbleSort(arr,s);
	
}
