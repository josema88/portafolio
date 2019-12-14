import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDetails } from '../../interfaces/product-details.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductDetails;
  productId: string;

  constructor( private route: ActivatedRoute,
              public productService: ProductsService ) { }

  ngOnInit() {
    this.route.params
      .subscribe( parameters => {
        //console.log(parameters['id']);
        this.productService.getProduct(parameters['id'])
          .subscribe( (product: ProductDetails) => {
            this.productId = parameters['id'];
            this.product = product
          });
      })
  }

}
