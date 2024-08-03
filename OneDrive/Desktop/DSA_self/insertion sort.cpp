#include<iostream>
using namespace std;
void insertionSort(int ary[], int size)
{
	int key,j;
	for(int i=1; i<size; i++)
	{
		cout<<"Pass "<<i<<" :- ";
		key=ary[i];
		j=i-1;
		while(j>=0 && ary[j]>key)
		{
			ary[j+1]=ary[j];
			j--;
		}
		ary[j+1]=key;
		
		for(int k=0; k<size; k++)
		{
			cout<<ary[k]<<" ";
		}
		cout<<endl;
	}
}
int main()
{
	int ary[]={5,2,9,1,5,6};
	int size=sizeof(ary)/sizeof(ary[0]);
	insertionSort(ary,size);
	return 0;
}
