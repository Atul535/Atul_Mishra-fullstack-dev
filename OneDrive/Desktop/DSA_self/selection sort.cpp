#include<iostream>
using namespace std;
void selectionSort(int ar[],int size)
{
	int min;
	for(int i=0; i<size-1; i++)
	{
		cout<<"Pass :- "<<i+1<<endl;
		min=i;
		for(int j=i+1; j<size; j++)
		{
			if(ar[min]>ar[j])
			{
				min=j;
			}
		}
		swap(ar[min],ar[i]);
		for(int k=0; k<size; k++)
		{
			cout<<ar[k]<<" ";
		}
		cout<<endl;
	}
}
int main()
{
	int size;
	cout<<"Enter the size :- ";
	cin>>size;
	int array[size];
	cout<<"Enter the data in array :- ";
	for(int i=0; i<size; i++)
	{
		cin>>array[i];
	}
	selectionSort(array,size);
	return 0;
}
